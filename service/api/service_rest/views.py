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

class AppointmentDetailEncoder(ModelEncoder):
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

