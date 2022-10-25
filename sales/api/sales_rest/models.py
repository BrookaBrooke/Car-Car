from django.db import models

class AutomobileVO(models.Model):
    vin = models.CharField(max_length=50, unique=True)
    sold = models.BooleanField(default=False)

    def __str__(self):
        return self.vin


class SalesPerson(models.Model):
    name = models.CharField(max_length=100)
    employee_num = models.PositiveSmallIntegerField(unique=True)

    def __str__(self):
        return self.name



class Customer(models.Model):
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=12, unique=True)

    def __str__(self):
        return self.name


class AutomobileSale(models.Model):
    price = models.FloatField()
    automobile = models.OneToOneField(
        AutomobileVO,
        related_name="automobile_sale",
        on_delete=models.PROTECT
    )

    sales_person = models.ForeignKey(
        SalesPerson,
        related_name='automobile_sale',
        on_delete=models.PROTECT,
    )

    customer = models.ForeignKey(
        Customer,
        related_name="autosales",
        on_delete=models.PROTECT
    )

    def __str__(self):
        return (
            self.sales_person.name + " sold " + str(self.automobile.vin)
        )
