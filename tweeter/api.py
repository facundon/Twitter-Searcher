from rest_framework import viewsets
from .serializers import HistorySerializer
from .models import History


class HistoryViewSet(viewsets.ModelViewSet):
    queryset = History.objects.all().order_by("search_date")
    serializer_class = HistorySerializer
