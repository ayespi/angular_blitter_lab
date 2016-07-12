# Lab: Blitter

> A modified version of [Hannah Howard's "Blitter" exercise](http://hannahhoward.github.io/angular-intermediate-wdi/).

Are you ready to build the next hot Silicon-Valley Startup: Blitter?

If there's one VC space that is wide open for almost instant success, it's social networking. You pretty much build a social networking site of any kind, and Bam! you're worth a billion dollars.

So let's do this. Your job is to build an angular site that pulls a list of 'bleets' from a backend (http://blittertime.herokuapp.com), and displays them in a list on a page. Your page should also have the ability to add new bleets, delete bleets, and 'like' a bleet. You'll need to build a custom directive to display each individual 'bleet'. And, you should be able to click on a bleet and display a detail page for just that individual bleet -- and you should use ui-router to do this.

## Steps

1. Bootstrap an Angular application. It should have...
  * A master `blitter` module.
  * A `bleets` sub-module that handles all "Bleet" related functionality.

2. Include `ui-router` and use it to...
  * Create two routes. One for an index of bleets, the other for a show page.
  * Don't forget to add the directive required to view different states in your HTML.

  > [`ui-router` documentation.](https://github.com/angular-ui/ui-router/wiki)

3. Create a factory that allows you to consume the Blitter API using `ngResource` and `$resource`.

  > [`$resource` documentation.]

4. Create a controller for each route.
  * The controller should have access to the functionality defined in your factory.

5. Create `index.html` and `show.html` bleet views.
  * `index` should list all bleets. `show` should offer a detailed view of each bleet.
  * In `index`, each bleet should have a link to its respective show page.

6. Add `new` functionality to your application. You can either...
  * Create a separate route, controller and view (with form) for `new` functionality. Or...
  * You can place the form on the `index` page and define form functionality in the index controller. No additional route required.
  * In either scenario, submission of the form should trigger a method in your controller that creates a new bleet in the API.

  > **BONUS:** If you go with the second index option, make it so that the new form only appears when you click a "New Grumble" button or link.

7. Add `edit` functionality to your application. You can either...
  * Create a separate route, controller and view (with form) for `edit` functionality. Or...
  * You can place the form on the `show` page and define form functionality in the show controller. No additional route required.
  * In either scenario, submission of the form should trigger a method in your controller that updates a bleet in the API.

  > **BONUS:** If you go with the second show option, make it so that the new form only appears when you click a "Edit Grumble" button or link.

8. Add a delete button or link next to each bleet in `index.html`.
  * When clicked, a controller method should be triggered that deletes the corresponding bleet in the API.
