from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^api/all', views.all, name='all'),
    url(r'^api/active', views.active, name='active'),
    url(r'^api/completed', views.completed, name='completed'),
    url(r'^.*$', views.index, name='index'),
]
