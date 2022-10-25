from django.contrib import admin
from sales_rest.models import AutomobileVO, SalesPerson, Customer, AutomobileSale

@admin.register(AutomobileVO)
class AutomobileVO(admin.ModelAdmin):
    pass

@admin.register(SalesPerson)
class SalesPerson(admin.ModelAdmin):
    pass

@admin.register(Customer)
class Customer(admin.ModelAdmin):
    pass

@admin.register(AutomobileSale)
class AutomobileSale(admin.ModelAdmin):
    pass

# Register your models here.
