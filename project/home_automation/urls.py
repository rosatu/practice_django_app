from django.urls import path
from . import views

urlpatterns = [
    path('api/locks/', views.LocksListCreate.as_view() ),
    path('api/psproperties/', views.PsPropertiesListCreate.as_view() ),
]
