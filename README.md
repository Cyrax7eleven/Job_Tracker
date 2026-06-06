# Job Tracker Dashboard

This is a vanilla JavaScript job tracker application built with Tailwind CSS and DaisyUI. It organizes job opportunities into three tabs: All, Interview, and Rejected.

## Features

- Dashboard count cards for total jobs, interview status, and rejected status
- Tab navigation with automatic counts for the current tab
- Job cards with company name, position, location, type, salary, and description
- Interview / Rejected status toggle buttons
- Delete functionality that removes a job and updates counts
- Responsive layout for mobile and desktop

## Answers to Questions

1. **What is the difference between `getElementById`, `getElementsByClassName`, and `querySelector` / `querySelectorAll`?**

   - `getElementById` returns a single element that matches the provided `id`. It is fast and specific to one element.
   - `getElementsByClassName` returns a live HTMLCollection of elements that match the provided class name. It updates automatically when the DOM changes.
   - `querySelector` returns the first element matching a CSS selector. `querySelectorAll` returns a static NodeList of all matching elements.

2. **How do you create and insert a new element into the DOM?**

   - Use `document.createElement('tagName')` to create a new element.
   - Set its attributes, text content, or children.
   - Insert it into the DOM using methods like `appendChild`, `insertBefore`, or `append`.

3. **What is Event Bubbling? And how does it work?**

   - Event bubbling is when an event triggered on a child element propagates upward through its parent elements. For example, a click on a button also triggers click handlers on the parent container and document unless propagation is stopped.

4. **What is Event Delegation in JavaScript? Why is it useful?**

   - Event delegation is a technique where a parent element listens for events on behalf of its children. It is useful because it reduces the number of event listeners and handles dynamic elements that are added after the initial page load.

5. **What is the difference between `preventDefault()` and `stopPropagation()` methods?**

   - `preventDefault()` stops the browser from executing the default action for an event, such as following a link or submitting a form.
   - `stopPropagation()` prevents the event from bubbling up to parent elements, so ancestor event listeners will not receive the event.

## Run locally

Open `index.html` in your browser to view the app.
