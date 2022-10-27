from .models import AutomobileSale, AutomobileVO, Customer, SalesPerson
from common.json import ModelEncoder
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from django.db import IntegrityError
import json
import requests


class AutomobileVODetailEncoder(ModelEncoder):
    model = AutomobileVO
    properties = ["vin", "sold"]

class SalesPersonListEncoder(ModelEncoder):
    model = SalesPerson
    properties = ["id", "name", "employee_num"]

class SalesPersonDetailEncoder(ModelEncoder):
    model = SalesPerson
    properties = ["id", "name", "employee_num"]

class CustomerListEncoder(ModelEncoder):
    model = Customer
    properties = ["id", "name", "address", "phone_number"]

class CustomerDetailEncoder(ModelEncoder):
    model = Customer
    properties = ["id", "name", "address", "phone_number"]

class AutomobileSaleListEncoder(ModelEncoder):
    model = AutomobileSale
    properties = [
        "id",
        "price",
        "automobile",
        "sales_person",
        "customer"
        ]

    encoders = {
        "automobile": AutomobileVODetailEncoder(),
        "sales_person": SalesPersonListEncoder(),
        "customer": CustomerListEncoder(),
    }

class AutomobileSaleDetailEncoder(ModelEncoder):
    model = AutomobileSale
    properties = [
        "id",
        "price",
        "automobile",
        "sales_person",
        "customer"
        ]

    encoders = {
        "automobile": AutomobileVODetailEncoder(),
        "sales_person": SalesPersonListEncoder(),
        "customer": CustomerListEncoder(),
    }


#-----------------------------------------------------------------------
# VIEWS
#-----------------------------------------------------------------------

# SalesPerson Form
@require_http_methods(["GET", "POST"])
def api_list_salespeople(request):
    if request.method == "GET":
        salespeople = SalesPerson.objects.all().order_by("employee_num")
        return JsonResponse(
            {"salespeople": salespeople},
            encoder = SalesPersonListEncoder,
        )
    else:
        try:
            content = json.loads(request.body)
            salesperson = SalesPerson.objects.create(**content)
            return JsonResponse(
                salesperson,
                encoder = SalesPersonDetailEncoder,
                safe=False,
            )
        except IntegrityError:
            return JsonResponse(
                {"message": "Employee # already exists"},
                status=400,
            )


# Show SalesPerson
@require_http_methods(["GET"])
def api_show_salesperson(request, pk):
    if request.method == 'GET':
        salesperson = SalesPerson.objects.get(id=pk)
        return JsonResponse(
            salesperson,
            encoder = SalesPersonDetailEncoder,
            safe=False,
        )


# Customer List
@require_http_methods(["GET", "POST"])
def api_list_customers(request):
    if request.method == "GET":
        customers = Customer.objects.all()
        return JsonResponse(
            {"customers": customers},
            encoder = CustomerListEncoder
        )
    else:
        content = json.loads(request.body)
        customer = Customer.objects.create(**content)
        return JsonResponse(
            customer,
            encoder = CustomerDetailEncoder,
            safe=False,
        )

# List AutomobileSale
@require_http_methods(["GET", "POST"])
def api_list_automobilesales(request):
    if request.method == "GET":
        automobilesales = AutomobileSale.objects.all()
        return JsonResponse(
            {"automobilesales": automobilesales},
            encoder = AutomobileSaleListEncoder
        )
    else:
        content = json.loads(request.body)
        print("content", content)
        try:
            automobile = AutomobileVO.objects.get(vin=content["automobile"])
            content["automobile"] = automobile
        except AutomobileVO.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid automobile vin"},
                status=400,
            )
        try:
            salesperson = content["sales_person"]
            content["sales_person"] = SalesPerson.objects.get(id=salesperson)

        except SalesPerson.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid salesperson name"},
                status = 400,
            )
        try:
            customer = Customer.objects.get(id=content["customer"])
            content["customer"] = customer
        except Customer.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid customer name"}
            )

        autosale = AutomobileSale.objects.create(**content)

        return JsonResponse(
            autosale,
            encoder = AutomobileSaleDetailEncoder,
            safe=False,
        )

# Delete AutomobileSale
@require_http_methods(["DELETE"])
def api_delete_automobilesale(request, pk):

    count, _ = AutomobileSale.objects.filter(id=pk).delete()
    return JsonResponse({"deleted": count > 0})
