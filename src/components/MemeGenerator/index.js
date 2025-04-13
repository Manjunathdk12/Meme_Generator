import {Component} from 'react'
import {
  MemeGeneratorContainer,
  MemeForm,
  MemeHeading,
  MemeInput,
  MemeLabel,
  MemeSelect,
  MemeButton,
  MemeDisplay,
  MemeText,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    imageUrl: '',
    topText: '',
    bottomText: '',
    activeFontSize: fontSizesOptionsList[0].optionId,
    isMemeGenerated: false,
  }

  onChangeInput = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  onChangeFontSize = event => {
    this.setState({activeFontSize: event.target.value})
  }

  onClickGenerate = event => {
    event.preventDefault()
    this.setState({isMemeGenerated: true})
  }

  render() {
    const {imageUrl, isMemeGenerated} = this.state
    const {topText, bottomText, activeFontSize} = this.state

    return (
      <MemeGeneratorContainer>
        <MemeForm onSubmit={this.onClickGenerate}>
          <MemeHeading>Meme Generator</MemeHeading>
          <MemeLabel htmlFor="imageUrl">Image URL</MemeLabel>
          <MemeInput
            id="imageUrl"
            type="text"
            name="imageUrl"
            value={imageUrl}
            onChange={this.onChangeInput}
          />
          <MemeLabel htmlFor="topText">Top Text</MemeLabel>
          <MemeInput
            id="topText"
            type="text"
            name="topText"
            value={topText}
            onChange={this.onChangeInput}
          />
          <MemeLabel htmlFor="bottomText">Bottom Text</MemeLabel>
          <MemeInput
            id="bottomText"
            type="text"
            name="bottomText"
            value={bottomText}
            onChange={this.onChangeInput}
          />
          <MemeLabel htmlFor="fontSize">Font Size</MemeLabel>
          <MemeSelect
            id="fontSize"
            value={activeFontSize}
            onChange={this.onChangeFontSize}
          >
            {fontSizesOptionsList.map(each => (
              <option key={each.optionId} value={each.optionId}>
                {each.displayText}
              </option>
            ))}
          </MemeSelect>
          <MemeButton type="submit">Generate</MemeButton>
        </MemeForm>

        {isMemeGenerated && (
          <MemeDisplay data-testid="meme" bgImage={imageUrl}>
            <MemeText fontSize={activeFontSize}>{topText}</MemeText>
            <MemeText fontSize={activeFontSize}>{bottomText}</MemeText>
          </MemeDisplay>
        )}
      </MemeGeneratorContainer>
    )
  }
}

export default MemeGenerator
