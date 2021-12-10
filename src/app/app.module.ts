import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PostItemComponent } from './posts/post-item/post-item.component';
import { ManagePostsComponent } from './posts/manage-posts/manage-posts.component';
import { PostDetailsComponent } from './posts/manage-posts/post-details/post-details.component';
import { NewPostComponent } from './posts/manage-posts/new-post/new-post.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostItemComponent,
    ManagePostsComponent,
    PostDetailsComponent,
    NewPostComponent,
    AboutComponent,
    ContactsComponent,
    ToolbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
