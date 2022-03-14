const server = new server({
    host: process.env.NODE_ENV !== 'Production' ? 'localhost' : 'dicoding.com'
});