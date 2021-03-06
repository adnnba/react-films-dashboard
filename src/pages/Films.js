import { Button } from "react-bootstrap"
import { useContext, useState } from "react"
import { Table } from "react-bootstrap"
import FilmsContext from "../utils/FilmsContext"
import AddIcon from "@mui/icons-material/Add"
import FilmAddModal from "../components/FilmAddModal"
import FilmRow from "../components/FilmRow"

function Films() {
  const { films } = useContext(FilmsContext)
  const [show, setShow] = useState(false)
  return (
    <>
      <h1 style={{ marginTop: 10 }}>Films</h1>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button style={{ marginRight: 40, marginBottom: 10 }} onClick={() => setShow(true)} variant="outline-primary">
          <AddIcon />
        </Button>
      </div>
      <Table bordered hover style={{ tableLayout: "fixed" }}>
        <thead>
          <tr>
            <th style={{ width: "9%" }}>#</th>
            <th style={{ width: "18%" }}>Title</th>
            <th style={{ width: "18%" }}>Description</th>
            <th style={{ width: "18%" }}>Poster</th>
            <th style={{ width: "9%" }}>Rating</th>
            <th style={{ width: "36%" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {films.map(film => (
            <FilmRow key={film._id} film={film} />
          ))}
        </tbody>
      </Table>
      <FilmAddModal show={show} setShow={setShow} />
    </>
  )
}

export default Films
