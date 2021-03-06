from django.urls import include, path
from rest_framework import routers
from . import views
from . import api

router = routers.DefaultRouter()
router.register(r'history', api.HistoryViewSet)

urlpatterns = [
    path("api/", include(router.urls)),
    path("api-auth/", include("rest_framework.urls", namespace="rest_framework")),
    path("search/", views.search, name="search"),
]
