from django.shortcuts import render
from django.http import HttpResponse
import ast
from tweeter.tweeterScript import make_search
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def search(request):
    if request.method == 'POST':
        str_request = request.body.decode()
        data = ast.literal_eval(str_request)
        tweets = make_search(data.get("search_term"))
    return HttpResponse(tweets)
