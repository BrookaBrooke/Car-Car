from django.shortcuts import render
from common.json import ModelEncoder
from django.views.decorators.http import require_http_methods
import json
from django.http import JsonResponse
from .models import VehicleVO, Appointment, Technician
from django.db import IntegrityError
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

class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties = [
        "name",
        "employee_num",
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


@require_http_methods(["GET", "POST"])
def api_list_services(request):
    if request.method == "GET":
        appointment = Appointment.objects.all()
        return JsonResponse(
            {"appointment": appointment},
            encoder = AppointmentEncoder,
            safe=False,
        )
    else:
        try:

            content = json.loads(request.body)
            appointment = Appointment.objects.create(**content)
            return JsonResponse(
                {"appointment":appointment},
                encoder = AppointmentEncoder,
                safe=False,
            )
        except IntegrityError:
            return JsonResponse(
                {"message": "Invalid Appointment"},
                status=400,
            )


@require_http_methods(["DELETE"])
def api_delete_hats(request, pk):
    if request.method == "DELETE":
        count, _ = Appointment.objects.filter(id=pk).delete()
        return JsonResponse({"deleted": count > 0})

