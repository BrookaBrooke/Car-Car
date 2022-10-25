from django.urls import path
from .views import api_get_appointment, api_list_appointments, api_delete_technicians, api_list_technicians

urlpatterns = [
    path('appointment/', api_list_appointments, name='api_list_appointments'),
    path('appointment/<int:pk>/', api_get_appointment, name='api_get_appointment'),
    path('technician/', api_list_technicians, name='api_list_technicians'),
    path('technician/<int:pk>/', api_delete_technicians, name='api_delete-technicians'),
]

