const proxy = {
    get(instance, property) {
        if (instance.services.has(property)) {
            return instance.get(property);
        }
        return instance[property];
    }
};

class Container {
    constructor() {
        this.services = new Map();
        this.instances = new Map();
        return new Proxy(this, proxy);
    }

    register(name, definition, dependencies = [], options = {}) {
        this.services.set(name, {
            definition,
            dependencies,
            ...{ singleton: true, ...options },
        });
    }

    get(name) {
        const service = this.services.get(name);

        if (!service) {
            throw new Error(`Service ${name} has not been registered`);
        }

        if (typeof service.definition === 'function') {
            let instance;
            if (service.singleton) {
                instance = this.instances.get(name);
                if (!instance) {
                    instance = this.factory(service);
                    this.instances.set(name, instance);
                }
                return instance;
            }
            return this.factory(service);
        }
        return service.definition;
    }

    resolveDependencies({ dependencies }) {
        return dependencies.reduce((acc, dependency) => {
            Object.assign(acc, { [dependency]: this.get(dependency) });
            return acc;
        }, {});
    }

    factory(service) {
        const Constructor = service.definition;
        if (typeof Constructor.prtotype !== 'undefined' && Constructor.prtotype.constructor) {
            return new Constructor(this.resolveDependencies(service));
        }
        return Constructor(this.resolveDependencies(service));
    }

    reset() {
        this.instances = new Map();
    }
}

module.exports = Container;