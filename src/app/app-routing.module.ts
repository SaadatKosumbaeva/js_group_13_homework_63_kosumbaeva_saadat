import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostDetailsComponent } from './posts/manage-posts/post-details/post-details.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ManagePostsComponent } from './posts/manage-posts/manage-posts.component';
import { EmptyPostComponent } from './posts/manage-posts/empty-post.component';
import { NewPostComponent } from './posts/manage-posts/new-post/new-post.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'posts', component: HomeComponent},
  {
    path: 'posts/manage', component: ManagePostsComponent, children: [
      {path: '', component: EmptyPostComponent},
      {path: ':id', component: PostDetailsComponent},
      {path: ':id/edit', component: NewPostComponent},
    ]
  },
  {path: 'posts/add', component: NewPostComponent},
  {path: 'posts/:id', component: PostDetailsComponent},
  {path: 'posts/:id/edit', component: NewPostComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contacts', component: ContactsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
