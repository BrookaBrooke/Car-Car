from django.contrib import admin
from .models import VehicleVO, Technician, Appointment
# Register your models here.
class VehicleVOAdmin(admin.ModelAdmin):
    pass
admin.site.register(VehicleVO, VehicleVOAdmin)
class TechnicianAdmin(admin.ModelAdmin):
    pass
admin.site.register(Technician, TechnicianAdmin)

class AppointmentAdmin(admin.ModelAdmin):
    pass

admin.site.register(Appointment, AppointmentAdmin)
