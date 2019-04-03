import React, { Component } from 'react';
import styled from 'styled-components';

class Results extends Component {

    render() {
        return (
            <div style = {{
              flex: 1,
              flexDirection: 'column',
              backgroundColor: '#EC2058',
              alignItems: 'stretch',
              justifyContent: 'center',
              width: 700,
              height: 300,
            }}>
                <div style = {{alignItems: 'center', padding: 10}}>
                    {this.props.title}
                </div>
                <div style = {{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    {/* the part below the title */}
                    <div style = {{height: 200, backgroundImage: 'url("https://www.travelwyoming.com/sites/default/files/uploads/consumer/7-18_MedicineBowHikingFishing_KL_0708_3298.jpg")', backgroundSize: 'contain' ,width: '46%', margin: '2%', padding: 15}}>
                        {/*photo */}
                        {/* <img style = {{width: '100%'}} src = "https://www.travelwyoming.com/sites/default/files/uploads/consumer/7-18_MedicineBowHikingFishing_KL_0708_3298.jpg" alt = {this.props.imgAlt} /> */}
                    </div>
                    <div style = {{width: '50%', padding: 15, flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                        {/* description box */}
                        <div style = {{height: '60%', paddingBottom: 10}}>{this.props.description}</div>
                        <div style = {{height: '40%'}}>
                            <button
                              raised
                              onPress={test}
                              title="Try out Pickable!"
                              buttonStyle={{width:145,height:45,borderRadius:25}}
                              color="#841584"
                              type="outline"
                              accessibilityLabel="Try out Pickable"
                              />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#EC2058',
    alignItems: 'stretch',
    justifyContent: 'center',
    width: 700,
  },
}); */

var test = function() {
  console.log('hellow');
}

export default Results;
