from django.shortcuts import render
from common.json import ModelEncoder
from django.views.decorators import requirehttpmethods
import json
from django.http import JsonResponse
from .models import VehicleVO, Appointment
# Create your views here.


class VehicleVOEncoder(ModelEncoder):
    model = VehicleVO
    properties = [
        "color",
        "year",
        "vin",
        "name",
        "manufacturer",
    ]

class AppointmentEncoder(ModelEncoder):
    model = Appointment
    properties = [
        "vin",
        "owner",
        "scheduled_time",
        "reason",
        "vip",
        "is_completed",
        "technician",

    ]
    encoders = {
        "vin": VehicleVOEncoder(),
    }


@requirehttpmethods(["GET", "POST"])
def api_list_services(request):
    if request.method == "GET":
        appointment = Appointment.objects.all()
        return JsonResponse(
            appointment,
            encoder = AppointmentEncoder,
            safe=False,
        )
    else:
        content = json.loads(request.body)
        try:
            href = content["vehicle"]
            vehicle = VehicleVO.objects.get(import_href=href)
            content["vehicle"] = vehicle
        except VehicleVOEncoder.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid Vehicle"},
                status=400,
            )
        appointment = Appointment.objects.create(**content)
        return JsonResponse(
            appointment,
            encoder = AppointmentEncoder,
            safe=False,
        )


@requirehttpmethods(["DELETE"])
def api_delete_hats(request, pk):
    if request.method == "DELETE":
        count, _ = Appointment.objects.filter(id=pk).delete()
        return JsonResponse({"deleted": count > 0})
