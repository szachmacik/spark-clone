// HOLON-META: {
//   purpose: "spark-clone",
//   morphic_field: "agent-state:4c67a2b1-6830-44ec-97b1-7c8f93722add",
//   startup_protocol: "READ morphic_field + biofield_external + em_grid",
//   wiki: "32d6d069-74d6-8164-a6d5-f41c3d26ae9b"
// }

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