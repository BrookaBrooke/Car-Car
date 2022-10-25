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
        "technician": TechnicianEncoder(),
    }


@require_http_methods(["GET", "POST"])
def api_list_appointments(request):
    if request.method == "GET":
        appointment = Appointment.objects.all()
        return JsonResponse(
            {"appointment": appointment},
            encoder = AppointmentEncoder,
            safe=False,
        )
    else:
        content = json.loads(request.body)
        try:
            VehicleVO.objects.get(vin=content["vin"])
            content["dealer_sold"] = True
        except VehicleVO.DoesNotExist:
            content["vip"] = False
            if "technician" in content:
                try:
                    technician = Technician.objects.get(id=content["technician"])
                    content["technician"] = technician
                except Technician.DoesNotExist:
                    return JsonResponse(
                        {"message": "Technician does not exist"},
                        status=400,
                    )
        appointment = Appointment.objects.create(**content)
        return JsonResponse(
            {"appointment": appointment},
            encoder = AppointmentEncoder,
            safe=False,
        )

@require_http_methods(["GET", "PUT", "DELETE"])
def api_get_appointment(request, pk):
    if request.method == "GET":
        appointment = Appointment.objects.get(id=pk)
        return JsonResponse(
            appointment,
            encoder=AppointmentEncoder,
            safe=False,
        )
    elif request.method == "PUT":
        Appointment.objects.filter(id=pk).update(is_completed=True)
        appointment = Appointment.objects.get(id=pk)
        return JsonResponse(
            appointment,
            encoder=AppointmentEncoder,
            safe=False,
        )
    else:
        count, _ = Appointment.objects.filter(id=pk).delete()
        return JsonResponse({"deleted": count > 0})

@require_http_methods(["GET","POST"])
def api_list_technicians(request):
    if request.method == "GET":
        technician = Technician.objects.all()
        return JsonResponse(
            {"technician":technician},
            encoder = TechnicianEncoder,
            safe=False,
        )
    else:
        try:
            content = json.loads(request.body)
            technician = Technician.objects.create(**content)
            return JsonResponse(
                {"technician":technician},
                encoder = TechnicianEncoder,
                safe = False,
            )
        except IntegrityError:
            return JsonResponse(
                {"message": "Invalid Technician"},
                status = 400,
            )



@require_http_methods(["DELETE"])
def api_delete_technicians(request, pk):
    if request.method == "DELETE":
        count, _ = Technician.objects.filter(id=pk),delete()
        return JsonResponse({"deleted": count > 0})
