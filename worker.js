export default {
  async fetch(request) {
    const url = new URL(request.url);
    if (url.pathname === "/health") {
      return Response.json({ok:true, service:"spark-clone-ui", version:"1.0"});
    }
    // Serve Genspark clone HTML for all routes
    const html = await fetch("https://raw.githubusercontent.com/szachmacik/spark-clone/main/index.html");
    const body = await html.text();
    return new Response(body, {
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "public, max-age=300",
        "Access-Control-Allow-Origin": "*"
      }
    });
  }
};