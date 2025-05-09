@WebServlet("/login")
public class LoginServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String username = request.getParameter("username");
        String password = request.getParameter("password");

        // Aqui você conectaria com o banco de dados (exemplo com MySQL)
        if (username.equals("admin") && password.equals("1234")) {
            response.sendRedirect("dashboard.html");
        } else {
            response.sendRedirect("index.html?erro=1");
        }
    }
}

@WebServlet("/enviar-token")
public class RecuperarSenhaServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String email = request.getParameter("email");

        // Aqui você buscaria o e-mail no banco e enviaria o link
        System.out.println("E-mail para recuperar senha: " + email);

        // Exemplo: gerar token e enviar e-mail (não implementado aqui)
        response.sendRedirect("recuperar-senha.html?sucesso=1");
    }
}

@WebServlet("/nova-senha")
public class SalvarNovaSenhaServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String novaSenha = request.getParameter("novaSenha");
        String email = request.getParameter("email");

        // Atualizar senha no banco de dados
        System.out.println("Nova senha salva para o e-mail: " + email);

        response.sendRedirect("index.html?senhaAlterada=1");
    }
}
