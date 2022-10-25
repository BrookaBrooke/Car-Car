import django
import os
import sys
import time
import json
import requests

sys.path.append("")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "service_project.settings")
django.setup()
from service_rest.models import Appointment

# Import models from service_rest, here.
# from service_rest.models import Something

def get_services():
    response = requests.get("http://service-api:8000/api/service")
    content = json.loads(response.content)
    print("content", content)
    for appointment in content["appointment"]:
        Appointment.objects.update_or_create(
            import_href = appointment("href"),
            defaults = {
                "vin": appointment["vin"],
                "owner": appointment["owner"],
                "scheduled_time": appointment["scheduled_time"],
                "reason": appointment["reason"],
                "vip": appointment["vip"],
                "is_completed": appointment["is_completed"],
                "technician": appointment["technician"],
                }
        )



def poll():
    while True:
        print('Service poller polling for data')
        try:
            get_services()
        except Exception as e:
            print(e, file=sys.stderr)
        time.sleep(60)


if __name__ == "__main__":
    poll()
