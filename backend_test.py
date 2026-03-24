import requests
import sys
from datetime import datetime
import json

class IndCodersAPITester:
    def __init__(self, base_url="https://devs-united.preview.emergentagent.com"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0
        self.test_results = []

    def run_test(self, name, method, endpoint, expected_status, data=None, headers=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}"
        if headers is None:
            headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"   URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=10)
            else:
                print(f"❌ Unsupported method: {method}")
                return False, {}

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                try:
                    response_data = response.json()
                    print(f"   Response: {json.dumps(response_data, indent=2)[:200]}...")
                except:
                    print(f"   Response: {response.text[:200]}...")
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                print(f"   Response: {response.text[:200]}...")

            self.test_results.append({
                "name": name,
                "method": method,
                "endpoint": endpoint,
                "expected_status": expected_status,
                "actual_status": response.status_code,
                "success": success,
                "response_preview": response.text[:100] if response.text else ""
            })

            return success, response.json() if success and response.text else {}

        except requests.exceptions.Timeout:
            print(f"❌ Failed - Request timeout")
            self.test_results.append({
                "name": name,
                "method": method,
                "endpoint": endpoint,
                "expected_status": expected_status,
                "actual_status": "TIMEOUT",
                "success": False,
                "error": "Request timeout"
            })
            return False, {}
        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            self.test_results.append({
                "name": name,
                "method": method,
                "endpoint": endpoint,
                "expected_status": expected_status,
                "actual_status": "ERROR",
                "success": False,
                "error": str(e)
            })
            return False, {}

    def test_root_endpoint(self):
        """Test root API endpoint"""
        return self.run_test(
            "Root API Endpoint",
            "GET",
            "api/",
            200
        )

    def test_create_contact_message(self):
        """Test creating a contact message"""
        test_data = {
            "name": f"Test User {datetime.now().strftime('%H%M%S')}",
            "email": "test@indcoders.com",
            "message": "This is a test message from the automated testing suite."
        }
        
        success, response = self.run_test(
            "Create Contact Message",
            "POST",
            "api/contact",
            200,
            data=test_data
        )
        
        if success and response:
            # Verify response structure
            required_fields = ['id', 'name', 'email', 'message', 'timestamp']
            missing_fields = [field for field in required_fields if field not in response]
            if missing_fields:
                print(f"⚠️  Warning: Missing fields in response: {missing_fields}")
                return False, {}
            
            # Verify data matches
            if (response.get('name') == test_data['name'] and 
                response.get('email') == test_data['email'] and 
                response.get('message') == test_data['message']):
                print(f"✅ Contact data validation passed")
                return True, response
            else:
                print(f"❌ Contact data validation failed")
                return False, {}
        
        return success, response

    def test_get_contact_messages(self):
        """Test retrieving contact messages"""
        return self.run_test(
            "Get Contact Messages",
            "GET",
            "api/contact",
            200
        )

    def test_create_status_check(self):
        """Test creating a status check"""
        test_data = {
            "client_name": f"test_client_{datetime.now().strftime('%H%M%S')}"
        }
        
        return self.run_test(
            "Create Status Check",
            "POST",
            "api/status",
            200,
            data=test_data
        )

    def test_get_status_checks(self):
        """Test retrieving status checks"""
        return self.run_test(
            "Get Status Checks",
            "GET",
            "api/status",
            200
        )

    def test_invalid_contact_data(self):
        """Test contact endpoint with invalid data"""
        invalid_data = {
            "name": "",  # Empty name
            "email": "invalid-email",  # Invalid email
            "message": ""  # Empty message
        }
        
        # This should return 422 for validation error, but let's see what it actually returns
        success, response = self.run_test(
            "Invalid Contact Data",
            "POST",
            "api/contact",
            422,  # Expected validation error
            data=invalid_data
        )
        
        # If it doesn't return 422, let's check what it returns
        if not success:
            print("   Note: Testing with invalid data to check validation")
        
        return success, response

def main():
    print("🚀 Starting IndCoders API Testing Suite")
    print("=" * 50)
    
    # Setup
    tester = IndCodersAPITester()
    
    # Run all tests
    print("\n📋 Running Backend API Tests...")
    
    # Test basic endpoints
    tester.test_root_endpoint()
    
    # Test contact functionality (main feature)
    contact_success, contact_response = tester.test_create_contact_message()
    tester.test_get_contact_messages()
    
    # Test status functionality
    tester.test_create_status_check()
    tester.test_get_status_checks()
    
    # Test validation
    tester.test_invalid_contact_data()
    
    # Print final results
    print("\n" + "=" * 50)
    print(f"📊 Test Results Summary:")
    print(f"   Tests Run: {tester.tests_run}")
    print(f"   Tests Passed: {tester.tests_passed}")
    print(f"   Success Rate: {(tester.tests_passed/tester.tests_run*100):.1f}%")
    
    # Print detailed results
    print(f"\n📋 Detailed Results:")
    for result in tester.test_results:
        status = "✅ PASS" if result['success'] else "❌ FAIL"
        print(f"   {status} - {result['name']} ({result['method']} {result['endpoint']})")
        if not result['success']:
            if 'error' in result:
                print(f"      Error: {result['error']}")
            else:
                print(f"      Expected: {result['expected_status']}, Got: {result['actual_status']}")
    
    # Check if contact form is working (critical for the website)
    if contact_success:
        print(f"\n✅ CRITICAL: Contact form backend is working correctly")
    else:
        print(f"\n❌ CRITICAL: Contact form backend is NOT working - this will break the website functionality")
    
    return 0 if tester.tests_passed == tester.tests_run else 1

if __name__ == "__main__":
    sys.exit(main())