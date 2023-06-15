

export default function HomeStats() {
    return (
        <div>
            <h2 className="mt-12 mb-1">Orders</h2>
            <div className="grid grid-cols-3 gap-4">
                <div className="tile">
                    <h3 className="tile-header">Today</h3>
                    <div className="tile-number">15</div>
                    <div className="tile-desc">15 orders today</div>
                </div>
                <div className="tile">
                    <h3 className="tile-header">This week</h3>
                    <div className="tile-number">20</div>
                    <div className="tile-desc">20 orders today</div>
                </div>
                <div className="tile">
                    <h3 className="tile-header">This month</h3>
                    <div className="tile-number">27</div>
                    <div className="tile-desc">27 orders today</div>
                </div>
            </div>
            <h2 className="mt-7 mb-1">Revenue</h2>
            <div className="grid grid-cols-3 gap-4">
                <div className="tile">
                    <h3 className="tile-header">Today</h3>
                    <div className="tile-number">R200</div>
                    <div className="tile-desc">15 orders today</div>
                </div>
                <div className="tile">
                    <h3 className="tile-header">This week</h3>
                    <div className="tile-number">R2 400</div>
                    <div className="tile-desc">20 orders today</div>
                </div>
                <div className="tile">
                    <h3 className="tile-header">This month</h3>
                    <div className="tile-number">R2 750</div>
                    <div className="tile-desc">27 orders today</div>
                </div>
            </div>
        </div>
    );
}