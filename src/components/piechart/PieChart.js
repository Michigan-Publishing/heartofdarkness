import React, { Fragment, Component } from "react"

import VisuallyHidden from "../visuallyHidden"
import styled from "styled-components"

import { PieChart } from "react-easy-chart"
import palette from "../../utils/palette"
import { TABLET_LANDSCAPE_WIDTH } from "../../constants"

const ButtonList = styled.ul`
  list-style-type: none;
  width: 100%;
`

/* update the transform on the first text element in the piechart */
const PieChartWrapper = styled.div`
  text:first-child {
    transform: translate(100.964px, -30.8243px);
  }
`

const ButtonListItem = styled.li`
  padding: 0;

  button {
    width: 40%;
    border: 1px solid ${palette.white};
    background: none;
    color: ${palette.white};
    font-size: 1.25rem;
    cursor: pointer;
  }

  &media(max-width: ${TABLET_LANDSCAPE_WIDTH}px) {
    button {
      width: 100%;
    }
  }
`

class Chart extends Component {
  state = { showPieChart: false }

  showPieChart = () => {
    this.setState({ showPieChart: true })
  }

  render() {
    const { data } = this.props

    return (
      <Fragment>
        <span aria-hidden="true">
          {!this.state.showPieChart && (
            <Fragment>
              <h3>Who gives you feedback?</h3>
              <small>Select one</small>
              <ButtonList>
                <ButtonListItem>
                  <button onClick={this.showPieChart}>
                    Friends and colleagues
                  </button>
                </ButtonListItem>
                <ButtonListItem>
                  <button onClick={this.showPieChart}>Mentors</button>
                </ButtonListItem>
                <ButtonListItem>
                  <button onClick={this.showPieChart}>Teachers</button>
                </ButtonListItem>
                <ButtonListItem>
                  <button onClick={this.showPieChart}>Writing groups</button>
                </ButtonListItem>
                <ButtonListItem>
                  <button onClick={this.showPieChart}>Editors</button>
                </ButtonListItem>
              </ButtonList>
            </Fragment>
          )}
          {this.state.showPieChart && (
            <Fragment>
              <h3>
                We recently surveyed people about where they got feedback, and
                they said that…
              </h3>
              <PieChartWrapper>
                <PieChart
                  labels
                  styles={{
                    ".chart_lines": {
                      strokeWidth: 0,
                    },
                    ".chart_text": {
                      fontFamily: "sans-serif",
                      fontSize: "1.25rem",
                      fill: "#333",
                    },
                  }}
                  data={data}
                />
              </PieChartWrapper>
            </Fragment>
          )}
        </span>
        <VisuallyHidden>
          <table>
            <thead>
              <tr>
                <th>Key</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {data.map(item => (
                <tr key={item.key}>
                  <td>{item.key}</td>
                  <td>{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </VisuallyHidden>
      </Fragment>
    )
  }
}

export default Chart
