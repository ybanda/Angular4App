import {BrowserModule } from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import {NgModule}  from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {AppComponent }   from './app.component';

import {AuthorsComponent} from './forms/authors.component';
import {AutoGrowDirective} from'./forms/auto-grow.directive';
import {AlbumsComponent} from './album/albums.component';
// import {AlbumComponent} from './album.component';
import {ConditionalStatementComponent} from './shared/conditionals.template';
import {ChangePasswordFormComponent} from './forms/changePassword-form.component'
import {ContactFormComponent} from './contact/contact-form.component';
import {ContactComponent} from './contact/contact.component';
import {ExplicitFormComponent} from './forms/explicit-form.component';
import {Favorite} from './forms/favorite.component';
import {GithubComponent} from './shared/github.component';
import {HomeComponent} from './home/home.component';
import {LearningComponent} from './shared/learnings.component';
import {LoggerService} from './core/logger.service';
import {PageNotFoundComponent} from './page-notfound.component'
import {SummaryPipe} from './shared/summary.pipe';
import {SubscriptionFormComponent} from './forms/subscription-form.component';
import {TwitterComponent} from './twitter/twitter.component';
import {Voter} from './forms/voter.component';
import {ZippyComponent} from './forms/zippy.component';
import {PreventUnsavedChangesGuard} from './prevent-unsaved-changes-guard.service';

import {AuthorService} from './forms/author.service';
import {TwitterService} from './twitter/twitter.service';

import {routing} from './app.routing';
import {contactRouting} from './contact/contacts.routing';
import {albumsRouting} from './album/albums.routing';
import {AuthGuard} from './forms/auth-guard.service'
import {AuthService} from './home/auth.service';
import {homeRouting} from './home/home.routing';

import {CoursesModule} from './courseModule/courses.module'
// const appRoutes :Routes=[
//   { path :'learnings',component:LearningComponent},
//   { path :'albums',component:AlbumsComponent},
//   { path :'album/:id',component:AlbumsComponent},
//   { path :'contact',component:ContactComponent},
// //{ path: '',redirectTo: '/albums',pathMatch: 'full'},
//   { path: '',redirectTo: '/learnings',pathMatch: 'full'},
//   { path: '**', component: PageNotFoundComponent }
// ];

@NgModule({
  imports:      [ BrowserModule,FormsModule,
                  ReactiveFormsModule,
                  HttpModule,
                  CoursesModule,
                  albumsRouting,
                  //RouterModule.forRoot(appRoutes),
                   contactRouting,
                    homeRouting,routing,NgbModule.forRoot()],
  declarations: [AppComponent, AlbumsComponent,
                  AuthorsComponent ,AutoGrowDirective,
                  ContactComponent,
                  ConditionalStatementComponent,ContactFormComponent,
                  ChangePasswordFormComponent,
                  ExplicitFormComponent,Favorite,
                  GithubComponent,HomeComponent,LearningComponent,PageNotFoundComponent,
                  SummaryPipe,SubscriptionFormComponent,
                  TwitterComponent,Voter,
                  ZippyComponent
                ],
  providers:    [ AuthGuard,AuthService,AuthorService,
                 PreventUnsavedChangesGuard,TwitterService,LoggerService],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
  
 }
