from django.conf.urls import patterns, include, url
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.views.generic.base import TemplateView

urlpatterns = patterns('',
    (
    r'^$', TemplateView.as_view(template_name="tf2app/index.html")),

)

urlpatterns += staticfiles_urlpatterns()
