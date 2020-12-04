import tweepy
import json
from EjercicioMauro.settings import TWITTER_API_KEYS, TWITTER_MAX_FETCH


auth = tweepy.OAuthHandler(TWITTER_API_KEYS["consumer_key"], TWITTER_API_KEYS["consumer_secret"])
auth.set_access_token(TWITTER_API_KEYS["access_token_key"], TWITTER_API_KEYS["access_token_secret"])

api = tweepy.API(
    auth,
    wait_on_rate_limit=True,
    wait_on_rate_limit_notify=True
)


def make_search(term):
    tweets = dict()
    for number, tweet in enumerate(tweepy.Cursor(api.search, q=term, tweet_mode="extended").items(TWITTER_MAX_FETCH), start=1):
        tweets[number] = tweet._json
    return json.dumps(tweets)
