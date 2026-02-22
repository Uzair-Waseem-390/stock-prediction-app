from django.urls import path
from accounts import views as accounts_views

urlpatterns = [
    path('accounts/register/', accounts_views.UserCreate.as_view(), name='register'),
]