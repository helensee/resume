import { h, Component } from 'preact' // eslint-disable-line
import style from './resume.css'
import data from './data'
const { name, contact } = data

class Entry extends Component {
  render () {
    const {org, dates, role, accomplishments} = this.props
    return (
      <div class={style.entry}>
        <div class={style.orgDateContainer}>
          <div class={style.role}>{role}</div>
          <div class={style.dates}>{dates}</div>
        </div>
        <div class={style.org}>{org}</div>
        <ul>
          {accomplishments.map(accomplishment => <li>{accomplishment}</li>)}
        </ul>
      </div>
    )
  }
}

class Section extends Component {
  render () {
    const {sectionName, data} = this.props
    return (
      <section>
        <h2 class={style.sectionTitle}>{sectionName}</h2>
        {data.map(datum => <Entry {...datum} />)}
      </section>
    )
  }
}

export default class Resume extends Component {
  render () {
    return (
      <div class={style.resume}>
        <h1 class={style.name}>{name}</h1>
        <div class={style.contactContainer}>
          {contact.map(value => <div class={style.contact}>{value}</div>)}
        </div>
        <Section data={data.experience} sectionName='Experience' />
        <section>
          <h2 class={style.sectionTitle}>Technical Skills</h2>
          <div class={style.technicalSection}>
            <Entry role='Experienced' accomplishments={data.technical.experienced} />
            <Entry role='Familiar' accomplishments={data.technical.familiar} />
          </div>
        </section>
        <Section data={data.volunteering} sectionName='Volunteering' />
        <Section data={data.education} sectionName='Education' />
      </div>
    )
  }
}
