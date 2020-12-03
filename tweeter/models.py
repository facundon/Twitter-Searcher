from django.db import models


class History(models.Model):
    search_date = models.DateTimeField(auto_now_add=True)
    search_term = models.TextField(max_length=60)

    def __str__(self):
        return self.search_term
