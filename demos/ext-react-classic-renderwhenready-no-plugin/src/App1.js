import React, { Component } from 'react'
import { ModalManager} from 'react-dynamic-modal'
import { ExtGrid } from '@sencha/ext-react-classic'
import data from './data'
import MyModal from './MyModal'

export default class App1 extends Component {

  onButtonWidgetClick = (button) => {
    ModalManager.open(<MyModal text={button.text} onRequestClose={() => true}/>)
  }

  store = Ext.create('Ext.data.Store', {data})
  render() {
    return (
      <ExtGrid
        height={500}
        width={500}
        title="Classic Toolkit Grid"
        store={this.store}
        features= {[{ftype: 'summary',dock: 'bottom'}]}
        columns={[
          {
            text: 'Button',
            width: 150,
            xtype: 'widgetcolumn',
            widget: {
              textAlign: 'center',
              bind: '{record.name}',
              xtype: 'button',
              handler: this.onButtonWidgetClick
            }
          },
          {text:'Name',dataIndex:'name',width:250,locked:true},
          {
            text: 'Stock Price',
            columns: [
              {text:'Price',dataIndex:'price',width:75,formatter:'usMoney',summaryType:'sum',summaryFormatter:'usMoney'},
              {text:'Change',dataIndex:'priceChange',width:80},
              {text:'% Change',dataIndex:'priceChangePct',width:100}
            ]
          },
          {text:'Email',dataIndex:'email',width:200}
        ]}
      />

    )
 }
}
