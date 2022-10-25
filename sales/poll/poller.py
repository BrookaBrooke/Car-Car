import django
import os
import sys
import time
import json
import requests

sys.path.append("")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "sales_project.settings")
django.setup()
INVENTORY_API = os.environ["INVENTORY_API"]

from sales_rest.models import AutomobileVO

def poll():
    while True:
        print('Sales poller polling for data')
        try:
            url = f"{INVENTORY_API}/api/automobiles/"
            response = requests.get(url)
            content = json.loads(response.content)
            for automobile in content ["autos"]:
                AutomobileVO.objects.update_or_create(
                    defaults={
                        "vin": automobile["vin"],
                        "sold": automobile["sold"]
                    },
                )
        except Exception as e:
            print(e, file=sys.stderr)
        time.sleep(30)


if __name__ == "__main__":
    poll()
