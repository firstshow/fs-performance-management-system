import React from 'react'

/**
 * 异步按需加载component
 * @param getComponent
 * @returns {AsyncComponent}
 */
export const asyncComponent = (getComponent) => {
    return class AsyncComponent extends React.Component {
        static Component = null;
        state = { Component: AsyncComponent.Component };

        componentWillMount() {
            if (!this.state.Component) {
                getComponent().then(({default: Component}) => {
                    AsyncComponent.Component = Component
                    this.setState({ Component })
                })
            }
        }
        render() {
            const { Component } = this.state
            if (Component) {
                return <Component {...this.props} />
            }
            return null
        }
    }
}

/**
 * 加载组件
 * @param component 需要加载的组件
 * @returns {*}
 */
export const load = (component) => {
    return import(`～/pages/${component}`)
}