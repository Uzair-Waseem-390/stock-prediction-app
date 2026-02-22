from zipfile import Path

from django.urls import path
from accounts import views as accounts_views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)


urlpatterns = [
    path('register/', accounts_views.UserCreate.as_view(), name='register'),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('profile/', accounts_views.UserProfile.as_view(), name='user_profile'),
]