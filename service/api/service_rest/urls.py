from django.urls import path
from .views import api_delete_hats, api_list_services

urlpatterns = [
    path('appointment/', api_list_services, name='api_list_services'),
    path('appointment/<int:pk>/', api_delete_hats, name='api_delete_hats'),
]

