from google.appengine.ext import db

class Wallpaper(db.Model):
    data = db.BlobProperty()
    stars = db.IntegerProperty(default=0)
    created_at = db.DateTimeProperty(auto_now_add=True)
