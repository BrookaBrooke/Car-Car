from django.shortcuts import render
from common.json import ModelEncoder
from django.views.decorators import requirehttpmethods
import json
from django.http import JsonResponse
from .models import VehicleVO, Appointment, Technician
# Create your views here.


class VehicleVOEncoder():
    model = VehicleVO
    properties = [
        "color",
        "year",
        "vin",
        "name",
        "manufacturer",
    ]

class AppointmentEncoder():
    model = Appointment
    properties = [
        "vin",
        "owner",
        "scheduled_time",
        "vip",

    ]

class AppointmentDetailEncoder():
    pass

