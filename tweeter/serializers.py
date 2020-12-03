from rest_framework import serializers
from .models import History


class HistorySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = History
        fields = ('id', 'search_date', 'search_term')
