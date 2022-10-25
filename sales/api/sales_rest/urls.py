from django.shortcuts import render
from django.urls import path
from .views import (
    api_list_salespeople, api_show_salesperson, api_list_customers, api_list_automobilesales,
    api_delete_automobilesale
)

urlpatterns = [
    path('salespeople/', api_list_salespeople, name='api_list_salespeople'),
    path('salespeople/<int:pk>/', api_show_salesperson, name='api_show_salesperson'),
    path('customers/', api_list_customers, name='api_list_customers'),
    path('automobilesales/', api_list_automobilesales, name='api_list_automobilesales'),
    path('automobilesales/<int:pk>/', api_delete_automobilesale, name="api_delete_automobilesale"),
]
# Create your views here.
