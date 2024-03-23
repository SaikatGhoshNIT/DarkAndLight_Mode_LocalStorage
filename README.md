# DarkAndLight_Mode_LocalStorage
Dark and Light Mode toggle with use of Local Storage



Technically, you can't directly store any image in your local storage. Local storage  works with strings only. But there are workarounds to achieve image storage functionality:

Data URI conversion: You can convert the image into a data URI format, which is basically a string containing the image data encoded along with its format information. Then you can store this data URI string in local storage.

IndexedDB: Local storage is a simpler option, but for larger images or more complex storage needs, you can explore IndexedDB. It's a browser database API that allows storing various data structures like images.

Here are some things to keep in mind:

Local storage has limited storage space (usually around 5MB). So, this method might not be suitable for very large images.
Converting and storing large images as data URIs can also become cumbersome.
For these reasons, consider if local storage is the best fit for your needs. If you're dealing with a significant amount of image data, a server-side storage solution might be more appropriate.