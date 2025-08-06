from django.urls import path
from .views import login_view  # make sure login_view is defined in views.py

urlpatterns = [
    path('login/', login_view),
]
