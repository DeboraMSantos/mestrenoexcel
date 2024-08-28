function status(request, response) {
  response.status(200).json({ msg: "Alunos do curso.dev estão online!" });
}
export default status;
