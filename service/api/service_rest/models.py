from django.db import models
from django.utils import timezone

# Create your models here.
class VehicleVO(models.Model):
    color = models.CharField(max_length=50)
    year = models.PositiveSmallIntegerField()
    vin = models.CharField(max_length=17, unique=True)
    name = models.CharField(max_length=100)
    manufacturer = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name


class Technician(models.Model):
    name = models.CharField(max_length=200)
    employee_num = models.PositiveSmallIntegerField()

    def __str__(self):
        return self.name


class Appointment(models.Model):
    vin = models.CharField(max_length=17, unique=True)
    owner = models.CharField(max_length=100)
    scheduled_time = models.DateTimeField(default=timezone.now)
    reason = models.CharField(max_length=200)
    vip = models.BooleanField(default=False)
    is_completed = models.BooleanField(default = False)
    technician = models.ForeignKey(Technician,
     related_name="technician",
      on_delete=models.CASCADE)


    #def __str__(self):
    #    return self.technician + "helped" + self.owner
