import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostDetailsComponent } from './posts/manage-posts/post-details/post-details.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ManagePostsComponent } from './posts/manage-posts/manage-posts.component';
import { NewPostComponent } from './posts/manage-posts/new-post/new-post.component';
import { EmptyPostComponent } from './posts/manage-posts/empty-post.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'posts', component: HomeComponent},
  {path: 'posts/manage', component: ManagePostsComponent, children: [
      {path: '', component: EmptyPostComponent},
      {path: ':id', component: PostDetailsComponent},
      {path: ':id/edit', component: NewPostComponent},
      // {path: ':id/delete', component: PostDetailsComponent},
    ]},
  {path: 'about', component: AboutComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'posts/:id', component: PostDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
