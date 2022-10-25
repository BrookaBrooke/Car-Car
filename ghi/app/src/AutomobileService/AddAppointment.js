import React from "react";

class AddAppointment extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            vin: [],
            owner: [],
            scheduled_time: [],
            reason: [],
            vip: [],
            is_completed: [],
            technician: [],
        };
    }
}
