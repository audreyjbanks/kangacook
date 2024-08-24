from django.views.generic import ListView, DetailView
from .models import Blog

class BlogListView(ListView):
    model = Blog
    template_name = 'blog_list.html'

class BlogDetailView(DetailView):
    model = Blog
    template_name = 'blog_detail.html'
